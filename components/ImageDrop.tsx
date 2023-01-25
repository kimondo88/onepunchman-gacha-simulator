import Image from 'next/image';
import data from '../data/items.json';

export default function ImageDrop({drop}){
    const width = 80, height = 70;
    return (
        <Image src={data.icons[drop]} alt={"image of drawed in gacha pull" + drop} width={width} height={height}/>
    )
}