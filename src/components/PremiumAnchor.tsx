import { useState } from 'react'

function PremiumAnchor() {
  const [bg, setBg] = useState('bg-gradient')

  return (
    <a
      href="#"
      onMouseOver={() => setBg('bg-[#dfacff1a]')}
      onMouseLeave={() => setBg('bg-gradient')}
      className={`rounded-lg ${bg} py-[10px] px-6 flex items-center gap-[15px] font-semibold hover:border-2 hover:border-[#A11CF3] hover:py-[8px] hover:px-[22px]`}
    >
      Quero ser Premium
      <img src="/images/arrow-right-icon.svg" className="w-[14px] h-[12px]" />
    </a>
  )
}

export default PremiumAnchor
