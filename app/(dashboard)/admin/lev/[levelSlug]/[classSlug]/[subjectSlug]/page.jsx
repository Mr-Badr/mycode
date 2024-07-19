"use client"

// app/admin/levels/[levelSlug]/[classSlug]/[subjectSlug]/page.jsx
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const courses = [
  { id: 1, name: 'Course 1', slug: 'course-1' },
  { id: 2, name: 'Course 2', slug: 'course-2' },
  // Add more courses as needed
]

export default function SubjectPage() {
  const pathname = usePathname()
  const [subjectSlug, setSubjectSlug] = useState(null)

  useEffect(() => {
    const pathSegments = pathname.split('/')
    const slug = pathSegments[pathSegments.length - 1]
    setSubjectSlug(slug)
  }, [pathname])

  if (!subjectSlug) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Courses for {subjectSlug}</h2>
      <div className="content">
        {/* Add any content specific to courses here */}
      </div>
      <div className="cards">
        {courses.map(course => (
          <div key={course.id} className="card">
            <Link href={`${pathname}/${course.slug}`}>
              {course.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
