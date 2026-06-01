import React from 'react'
import { useState } from 'react'

export default function App() {
  const [route, setRoute] = useState('home')

  if (route === 'home') {
    return React.createElement('div', {
      style: { minHeight: '100vh', background: '#070709', color: '#e2e2ec', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }
    },
      React.createElement('h1', { style: { fontSize: '72px', fontWeight: 900, marginBottom: '20px' } },
        'Find your next job by ',
        React.createElement('span', { style: { color: '#7c6af7' } }, 'swiping right.')
      ),
      React.createElement('p', { style: { fontSize: '18px', color: '#6b6b80', marginBottom: '36px' } }, 'AI matches you to roles you will love.'),
      React.createElement('button', {
        onClick: () => setRoute('swipe'),
        style: { padding: '14px 32px', background: '#e8ff47', color: '#070709', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }
    )
  }

  const jobs = [
    { company: 'Stripe', role: 'Senior Product Designer', salary: '$140k' },
    { company: 'Linear', role: 'Frontend Engineer', salary: '$150k' },
    { company: 'Vercel', role: 'Growth Lead', salary: '$120k' }
  ]

  return React.createElement('div', { style: { minHeight: '100vh', background: '#070709', color: '#e2e2ec', fontFamily: 'sans-serif', padding: '32px 16px' } },
    React.createElement('button', { onClick: () => setRoute('home'), style: { background: 'none', border: 'none', color: '#6b6b80', cursor: 'pointer', fontSize: '13px', marginBottom: '24px' } }, 'HOME'),
    React.createElement('h2', { style: { fontSize: '24px', marginBottom: '24px', textAlign: 'center' } }, 'Browse Jobs'),
    ...jobs.map((job, i) =>
      React.createElement('div', { key: i, style: { background: '#0f0f12', border: '1px solid #1c1c22', borderRadius: '16px', padding: '24px', marginBottom: '16px', maxWidth: '500px', margin: '0 auto 16px' } },
        React.createElement('h3', { style: { fontSize: '18px', marginBottom: '4px' } }, job.role),
        React.createElement('p', { style: { color: '#6b6b80', fontSize: '13px', marginBottom: '16px' } }, job.company + ' · ' + job.salary),
        React.createElement('div', { style: { display: 'flex', gap: '8px' } },
          React.createElement('button', { style: { flex: 1, padding: '10px', background: '#1a0505', border: '1px solid #f8717133', borderRadius: '8px', color: '#f87171', cursor: 'pointer', fontWeight: 700 } }, 'SKIP'),
          React.createElement('button', { style: { flex: 1, padding: '10px', background: '#052010', border: '1px solid #34d39933', borderRadius: '8px', color: '#34d399', cursor: 'pointer', fontWeight: 700 } }, 'APPLY')
        )
      )
    )
  )
}