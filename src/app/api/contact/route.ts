import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目をすべて入力してください。' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください。' },
        { status: 400 }
      )
    }

    const subjectMap: { [key: string]: string } = {
      event: 'イベント企画・運営について',
      web: 'Web制作について',
      consulting: 'コンサルティングについて',
      partnership: '協業・パートナーシップについて',
      other: 'その他'
    }

    // Send email to company
    const emailResult1 = await resend.emails.send({
      from: 'Meicon LLC <noreply@mei-con.jp>',
      to: ['meicon@mei-con.jp'], // 受信先メールアドレス
      subject: `【お問い合わせ】${subjectMap[subject] || subject}`,
      html: `
        <h2>お問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        ${company ? `<p><strong>会社名・団体名:</strong> ${company}</p>` : ''}
        <p><strong>お問い合わせ種類:</strong> ${subjectMap[subject] || subject}</p>
        <hr />
        <h3>お問い合わせ内容:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    })

    console.log('Email to company sent:', emailResult1)

    // Send confirmation email to user
    const emailResult2 = await resend.emails.send({
      from: 'Meicon LLC <noreply@mei-con.jp>',
      to: [email],
      subject: 'お問い合わせを受け付けました - Meicon LLC',
      html: `
        <h2>${name} 様</h2>
        <p>この度は、Meicon LLC へお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。</p>
        <hr />
        <p><strong>お問い合わせ種類:</strong> ${subjectMap[subject] || subject}</p>
        ${company ? `<p><strong>会社名・団体名:</strong> ${company}</p>` : ''}
        <h3>お問い合わせ内容:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr />
        <p>2営業日以内に担当者よりご連絡させていただきます。</p>
        <p>今しばらくお待ちください。</p>
        <br />
        <p>Meicon LLC</p>
        <p>Email: meicon@mei-con.jp</p>
      `,
    })

    console.log('Confirmation email to user sent:', emailResult2)

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'メール送信中にエラーが発生しました。しばらく経ってから再度お試しください。' },
      { status: 500 }
    )
  }
}
