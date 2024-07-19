"use client"

// app/admin/levels/[levelSlug]/[classSlug]/[subjectSlug]/[courseSlug]/page.jsx
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CoursePage() {
  const pathname = usePathname()
  const [courseSlug, setCourseSlug] = useState(null)

  useEffect(() => {
    const pathSegments = pathname.split('/')
    const slug = pathSegments[pathSegments.length - 1]
    setCourseSlug(slug)
  }, [pathname])

  if (!courseSlug) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Details for {courseSlug}</h2>
      <div className="content">
        {/* Add detailed content specific to the course here */}
      </div>
    </div>
  )
}
