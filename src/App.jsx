import { useState } from 'react'

const suiteUrl = '/aradhya-suite/index.html'

/**
 * React application boundary for the laboratory suite.
 *
 * The existing application is intentionally loaded inside the React host so its
 * full workflow (including its local browser data, report print layouts and all
 * current navigation handlers) remains unchanged while future views can be
 * migrated one React component at a time.
 */
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <main className="react-suite-host" aria-busy={!isLoaded}>
      {!isLoaded && (
        <div className="suite-loading" role="status" aria-live="polite">
          <span className="suite-loading__mark">A</span>
          <p>Loading Aradhya Diagnostic Suite…</p>
        </div>
      )}
      <iframe
        className={`suite-frame${isLoaded ? ' suite-frame--ready' : ''}`}
        title="Aradhya Diagnostic Suite"
        src={suiteUrl}
        onLoad={() => setIsLoaded(true)}
      />
    </main>
  )
}
