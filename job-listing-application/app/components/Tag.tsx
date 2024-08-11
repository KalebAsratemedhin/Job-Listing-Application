
const Tag = ({primary, name}: {primary: string, name: string}) => {
  const textColor = `text-${primary}-tag`
  const bgColor = `bg-${primary}-tag`
  return (
    <div className={`rounded-full border-transparent px-4 py-1 ${textColor} ${bgColor} bg-opacity-10`}>
        {name}
    </div>
  )
}

export default Tag