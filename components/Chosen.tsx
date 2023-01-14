import data from '../data/portraits.json';
import Image from 'next/image';

export default function Chosen({chosen}){
    return (
        <Image src={data[chosen]} alt={"image of chosen gacha character" + chosen} width="100" height="100"/>    
    )
}

