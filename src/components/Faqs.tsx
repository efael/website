import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Is this really end-to-end encrypted?',
      answer:
        'Yes. All messages, calls, and media are end-to-end encrypted by default using the Matrix protocol’s Olm and Megolm cryptographic libraries.',
    },
    {
      question: 'Is the platform centralized?',
      answer:
        'No. It’s fully decentralized. You can join an existing server or run your own. Federation means no single company owns your data or controls your experience.',
    },
    {
      question: 'Can I use it on all my devices?',
      answer:
        'Absolutely. Our app works on iOS, Android, desktop, and web. Your conversations sync seamlessly across all your devices.',
    },
  ],
  [
    {
      question: 'Can I host my own server?',
      answer:
        'Yes — that’s one of the core strengths of Matrix. You can deploy your own homeserver using Synapse or Dendrite easily with Efael\'s provided infrastructure via NixOS, and manage your own identity server if desired.',
    },
    {
      question: 'Can I use it with other platforms?',
      answer:
        'You can bridge Matrix with other tools like Slack, Discord, Telegram, IRC, and more. Our platform is open and interoperable.',
    },
    {
      question: 'Does it support groups and voice/video calls?',
      answer:
        'Yes. You can create public or private rooms, threads, and communities (Spaces), and start encrypted voice or video calls — one-on-one or in groups.',
    },
  ],
  [
    {
      question: 'Is my data ever sold or tracked?',
      answer:
        'Never. Your data is encrypted and never shared or monetized. We don’t track usage behavior or embed third-party analytics.',
    },
    {
      question: 'Is it open source?',
      answer:
        'Yes. Both the Matrix protocol and our client/infra are open source. You can inspect, audit, or contribute to the code.',
    },
    {
      question: 'What’s the difference between Matrix and other messaging apps?',
      answer:
        'Unlike traditional messengers, Matrix is decentralized — there’s no central server controlling your conversations. It supports federation, so anyone can run their own server and still connect to others. Plus, everything is end-to-end encrypted, extensible, and open-source — no walled gardens, no surveillance capitalism.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32 shadow-lg shadow-gray-900/5"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@efael.net"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
