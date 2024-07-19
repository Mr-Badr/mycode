"use client"

// app/admin/levels/[levelSlug]/[classSlug]/page.jsx
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const subjects = [
  { id: 1, name: 'Subject 1', slug: 'subject-1' },
  { id: 2, name: 'Subject 2', slug: 'subject-2' },
  // Add more subjects as needed
]

export default function ClassPage() {
  const pathname = usePathname()
  const [classSlug, setClassSlug] = useState(null)

  useEffect(() => {
    const pathSegments = pathname.split('/')
    const slug = pathSegments[pathSegments.length - 1]
    setClassSlug(slug)
  }, [pathname])

  if (!classSlug) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Subjects for {classSlug}</h2>
      <div className="content">
        {/* Add any content specific to subjects here */}
      </div>
      <div className="cards">
        {subjects.map(subject => (
          <div key={subject.id} className="card">
            <Link href={`${pathname}/${subject.slug}`}>
              {subject.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
