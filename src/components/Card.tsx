import CardTitle from './CardTitle'
import CardDescription from './CardDescription'

type Props =  {
    primary?: true | false
}

const Card:React.FC<Props> = ({primary}) => {
  return (
    <div className='card'>
        <CardTitle>Product Title</CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure possimus asperiores error sunt impedit nisi maiores quaerat libero vero necessitatibus, doloremque numquam reiciendis veniam eaque deserunt qui perferendis minus?</CardDescription>
        <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"/>
    </div>
  )
}

export default Card