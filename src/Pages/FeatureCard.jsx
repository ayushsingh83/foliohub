import BorderGlow from "../component/BorderGlow"

const FeatureCard = ({icon,heading,desc}) => {
  return (
    <BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#060010"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
>
  <div style={{ padding: '2em' }}>
    <div className="w-[350px] h-[200px]s rounded-[15px] p-4 flex flex-col gap-2 justify-start hover:scale-[1.04] duration-400 ease-in-out">
        <span className="w-[45px] h-[45px] ">{icon}</span>
        <div className="text-[18px] font-medium mt-2">{heading}</div>
        <div className="text-[15px] font-light">{desc}</div>
    </div>
  </div>
</BorderGlow>
    
  )
}

export default FeatureCard