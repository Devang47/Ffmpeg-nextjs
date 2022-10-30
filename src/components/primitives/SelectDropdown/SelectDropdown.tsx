import React from 'react'

type Props = {
  options: Option[]
  id?: string
  label?: string
}

type Option = {
  id: number
  value: string
}

function SelectDropdown({
  options,
  id = `select`,
  label = 'label here:'
}: Props) {
  return (
    <div className="dropdown-menu">
      <div className="text-[12px] font-bold text-light-2 mb-1.5">{label}</div>

      <select
        name="select-menu"
        className="py-2.5 px-5 border border-light-3 outline-none bg-dark-1 rounded appearance-none relative focus:border-highlight !pr-14"
        id={id}
        required
      >
        {options.map((e, i) => (
          <option value={e.value} selected={i === 0} key={e.id}>
            {e.value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectDropdown
