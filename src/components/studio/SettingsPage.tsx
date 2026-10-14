import { Bell, Database, Eye, HardDrive, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const settings = [
  { id: 'confirm', icon: Eye, title: 'Preview every route', detail: 'Require confirmation before an executor receives the task.', initial: true },
  { id: 'local', icon: HardDrive, title: 'Prefer local execution', detail: 'Choose a capable local model before a cloud free tier.', initial: false },
  { id: 'history', icon: Database, title: 'Store local run history', detail: 'Keep task contracts and receipts in this browser.', initial: true },
  { id: 'alerts', icon: Bell, title: 'Quota warnings', detail: 'Warn when a route may consume paid or limited usage.', initial: true },
]

export function SettingsPage() {
  const [values, setValues] = useState<Record<string, boolean>>(() => Object.fromEntries(settings.map((item) => [item.id, item.initial])))

  return (
    <main className="studio-page settings-page">
      <header className="studio-page__header">
        <div><span>Control policy</span><h2>Nothing runs by implication.</h2></div>
        <p>Define how Stroma stores history, selects providers, warns about quota, and asks for approval.</p>
      </header>
      <div className="settings-page__list">
        {settings.map(({ id, icon: Icon, title, detail }) => (
          <label key={id}>
            <Icon size={19} aria-hidden="true" />
            <span><strong>{title}</strong><small>{detail}</small></span>
            <input type="checkbox" checked={values[id]} onChange={(event) => setValues((current) => ({ ...current, [id]: event.target.checked }))} />
            <i aria-hidden="true" />
          </label>
        ))}
      </div>
      <section className="settings-page__security"><ShieldCheck /><div><h3>Credential boundary</h3><p>Persistent plan tokens must remain local and under the user’s control. API connections will use provider-supported authentication only.</p></div><button>Review policy</button></section>
    </main>
  )
}
