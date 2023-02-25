import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <header>
      <Link href="/"><h1>Starrdev</h1></Link>
      
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Service</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact us</Link>
        <Link href="/about">About us</Link>
      </nav>
</header>
  )
}

export default Header