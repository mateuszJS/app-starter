type Props = {
  width?: number
  loader?: boolean
  tKey?: string
}

const Typography = ({ tKey }: Props) => {
  return (
    <h1 className="root">
      {tKey}
      <style jsx>{`
        .root {
          color: darkblue;
        }
      `}</style>
    </h1>
  )
}

export default Typography
