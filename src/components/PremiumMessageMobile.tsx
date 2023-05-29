import PremiumAnchor from './PremiumAnchor'

interface PremiumMessageMobileProps {
  premiumMessageIsHide: boolean
  setPremiumMessageIsHide: React.Dispatch<React.SetStateAction<boolean>>
}

function PremiumMessageMobile(props: PremiumMessageMobileProps) {
  function hidePremiumMessage() {
    props.setPremiumMessageIsHide(true)
  }

  return !props.premiumMessageIsHide ? (
    <div className="bg-gray flex flex-col lg:hidden fixed bottom-0 items-center text-white px-[14px] py-6 gap-[18px] text-[15px]">
      <button
        onClick={hidePremiumMessage}
        className="flex items-center gap-[6px] font-semibold"
      >
        Fechar <img src="/images/x-icon.svg" className="w-[16px] h-[16px]" />
      </button>

      <p className="text-center">
        Não limite sua criatividade, junte-se a familia Blocks por apenas{' '}
        <strong>BRL 19,99</strong>
      </p>

      <PremiumAnchor />
    </div>
  ) : null
}

export default PremiumMessageMobile
