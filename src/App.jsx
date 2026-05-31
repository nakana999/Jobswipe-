import React from 'react'
import { useState } from 'react'

export default function App() {
  const [route, setRoute] = useState('home')

  if (route === 'home') {
    return React.createElement('div', {
      style: {
        minHeight: '100vh',
        background: '#070709',
        color: '#e2e2ec',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center'
      }
    },
      React.createElement('div', {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#0f0f12',
          border: '1px solid #1c1c22',
          borderRadius: '100px',
          padding: '6px 16px',
          marginBottom: '28px'
        }
      },
        React.createElement('div', { style: { width: 6, height: 6, borderRadius: '50%', background: '#34d399' } }),
        React.createElement('span', { style: { fontSize: '10px', letterSpacing: '0.18em', color: '#6b6b80' } }, 'SUPABASE + STRIPE CONNECTED')
      ),
      React.createElement('h1', {
        style: { fontSize: 'clamp(44px,8vw,72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }
      }, 'Find your next job by ', React.createElement('span', { style: { color: '#7c6af7' } }, 'swiping right.')),
      React.createElement('p', {
        style: { fontSize: '18px', color: '#6b6b80', lineHeight: 1.8, marginBottom: '36px', maxWidth: '440px' }
      }, 'AI matches you to roles you will love. Sign up free and start swiping.'),
      React.createElement('div', { style: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' } },
        React.createElement('button', {
          onClick: () => setRoute('swipe'),
          style: { padding: '14px 32px', background: '#e8ff47', color: '#070709', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }
        }, 'START SWIPING →'),
        React.createElement('button', {
          onClick: () => setRoute('swipe'),
          style: { padding: '14px 32px', background: 'transparent', color: '#6b6b80', border: '1px solid #1c1c22', borderRadius: '10px', fontSize: '14px', cursor: 'pointer' }
        }, 'BROWSE JOBS')
      )
    )
  }

  if (route === 'swipe') {
    const jobs = [
      { company: 'Stripe', role: 'Senior Product Designer', salary: '$140k', color: '#635BFF' },
      { company: 'Linear', role: 'Frontend Engineer', salary: '$150k', color: '#5E6AD2' },
      { company: 'Vercel', role: 'Growth Lead', salary: '$120k', color: '#ffffff' }
    ]
    return React.createElement('div', {
      style: { minHeight: '100vh', background: '#070709', color: '#e2e2ec', fontFamily: 'sans-serif' }
    },
      React.createElement('nav', {
        style: { padding: '0 24px', borderBottom: '1px solid #1c1c22', height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }
      },
        React.createElement('span', { style: { fontSize: '20px', fontWeight: 900 } },
          React.createElement('span', { style: { color: '#e2e2ec' } }, 'Job'),
          React.createElement('span', { style: { color: '#7c6af7' } }, 'Swipe')
        ),
        React.createElement('button', {
          onClick: () => setRoute('home'),
          style: { background: 'none', border: 'none', color: '#6b6b80', cursor: 'pointer', fontSize: '13px' }
        }, '← HOME')
      ),
      React.createElement('div', {
        style: { maxWidth: '500px', margin: '0 auto', padding: '32px 16px' }
      },
        React.createElement('h2', { style: { fontSize: '24px', marginBottom: '24px', textAlign: 'center' } }, 'Browse Jobs'),
        ...jobs.map((job, i) =>
          React.createElement('div', {
            key: i,
            style: { background: '#0f0f12', border: '1px solid #1c1c22', borderRadius: '16px', padding: '24px', marginBottom: '16px' }
          },
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' } },
              React.createElement('div', null,
                React.createElement('h3', { style: { fontSize: '18px', marginBottom: '4px' } }, job.role),
                React.createElement('p', { style: { color: '#6b6b80', fontSize: '13px' } }, job.company)
              ),
              React.createElement('span', { style: { color: '#34d399', fontWeight: 700, fontSize: '16px' } }, job.salary)
            ),
            React.createElement('div', { style: { display: 'flex', gap: '8px' } },
              React.createElement('button', {
                style: { flex: 1, padding: '10px', background: '#1a0505', border: '1px solid #f8717133', borderRadius: '8px', color: '#f87171', cursor: 'pointer', fontSize: '13px', fontWeight: 700 }
              }, '✗ SKIP'),
              React.createElement('button', {
                style: { flex: 1, padding: '10px', background: '#052010', border: '1px solid #34d39933', borderRadius: '8px', color: '#34d399', cursor: 'pointer', fontSize: '13px', fontWeight: 700 }
              }, '✓ APPLY')
            )
          )
        )
      )
    )
  }

  return React.createElement('div', null, 'JobSwipe')
}
