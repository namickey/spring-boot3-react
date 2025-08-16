import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Items from './items/Items'
import Counter from './counter/Counter'

function Home() {
  return <p>ホームです。</p>
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      <h1>Sample App</h1>
      <nav style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <Link to="/">Home</Link>
        <Link to="/demo/counter">Counter</Link>
        <Link to="/demo/items">Items</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/counter" element={<Counter />} />
        <Route path="/demo/items" element={<Items />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App