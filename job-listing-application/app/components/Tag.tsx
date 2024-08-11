
const Tag = ({text, background, name}: {text: string, background: string, name: string}) => {
  return (
    <div className={`rounded-full border-transparent px-4 py-1 ${text} ${background} bg-opacity-10`}>
        {name}
    </div>
  )
}

export default Tag