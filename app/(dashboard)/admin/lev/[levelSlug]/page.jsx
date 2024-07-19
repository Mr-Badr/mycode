"use client"
// app/admin/levels/[levelSlug]/page.jsx
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const levels = [
  { id: 1, name: 'Level 1', slug: 'level-1' },
  { id: 2, name: 'Level 2', slug: 'level-2' },
  // Add more levels as needed
]

export default function LevelPage() {
  const pathname = usePathname()

  return (
    <div>
      <h2>Levels</h2>
      <div className="cards">
        {levels.map(level => (
          <div key={level.id} className="card">
            <Link href={`/admin/lev/${level.slug}`}>
              {level.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

