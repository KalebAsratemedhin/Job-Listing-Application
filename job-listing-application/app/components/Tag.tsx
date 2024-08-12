
const Tag = ({text, bg, name}: {text: string, bg: string, name: string}) => {
  
  return (
    <div className={`rounded-full border-transparent px-4 py-1 ${text} ${bg} bg-opacity-10`}>
        {name}
    </div>
  )
}

export default Tag