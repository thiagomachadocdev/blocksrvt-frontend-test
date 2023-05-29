import PremiumAnchor from './PremiumAnchor'

function PremiumMessage() {
  return (
    <header className="bg-gray w-full p-5 hidden lg:flex items-center justify-center gap-[18px] fixed top-0 text-white">
      <p className="text-lg">
        Não limite sua criatividade, junte-se a familia Blocks por apenas{' '}
        <strong>BRL 19,99</strong>
      </p>

      <PremiumAnchor />
    </header>
  )
}

export default PremiumMessage
