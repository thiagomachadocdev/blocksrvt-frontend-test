import { Family } from '../utils/types'

interface CardProps {
  family: Family
}

function Card(props: CardProps) {
  return (
    <a href="#" className="w-max">
      <img
        src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${props.family.id}.jpg`}
        className="flex items-center justify-center bg-white w-[138px] lg:w-[176px] h-[137px] lg:h-[198px] border border-border border-b-0 rounded-t-lg"
      />

      <div className="w-[138px] lg:w-[176px] p-2 flex items-center justify-between gap-2 border border-border rounded-b-lg">
        <p className="flex lg:hidden text-[10px] font-semibold w-full max-w-[128px]">
          {(
            props.family.details.name +
            ' - ' +
            props.family.details.description
          ).slice(0, 20)}
          ...
        </p>

        <p className="hidden lg:flex text-[10px] font-semibold w-full max-w-[128px]">
          {(
            props.family.details.name +
            ' - ' +
            props.family.details.description
          ).slice(0, 35)}
          ...
        </p>

        <div className="bg-border w-[1px] h-[20px]" />

        <img
          src="/images/arrow-up-right-icon.svg"
          className="w-[16px] h-[16px]"
        />
      </div>
    </a>
  )
}

export default Card
