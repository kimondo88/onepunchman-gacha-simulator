import data from '../data/items.json';
import Image from 'next/image';

export default function Chosen({chosen}){
    return (
        <Image src={data.icons[chosen]} alt={"image of chosen gacha character" + chosen} width="100" height="100"/>    
    )
}

