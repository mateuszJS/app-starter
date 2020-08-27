type Props = {
  duration: number
  rippleArray: Array<{ top: number; left: number }>
}

const Ripple = ({ duration = 850, rippleArray }: Props) => (
  <>
    {rippleArray.map((ripple, index) => (
      <span key={index} style={ripple} />
    ))}
    <style jsx>{`
      @keyframes ripple {
        to {
          opacity: 0;
          transform: scale(2);
        }
      }
      span {
        transform: scale(0);
        border-radius: 50%;
        position: absolute;
        opacity: 0.55;
        background-color: currentColor;
        animation: ripple ${duration}ms;
        width: 100%;
        padding-top: 100%;
      }
    `}</style>
  </>
)

export default Ripple
