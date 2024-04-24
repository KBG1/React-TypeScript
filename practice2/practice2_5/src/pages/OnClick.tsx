const rootDiv = document.getElementById('root')
if (rootDiv){
	rootDiv.onclick = (e: Event) => {
        const {isTrusted, target, bubbles} = e;
        console.log('mouse click occurs on rootDiv', isTrusted, bubbles)
    }
    rootDiv.onclick = (e: Event) => {
        const {isTrusted, target, bubbles} = e;
        //prettier-ignore
        console.log('mouse click also occurs on rootDiv', isTrusted, bubbles)
    }
}

export default function Onclick(){
    return <div>OnClick</div>
}