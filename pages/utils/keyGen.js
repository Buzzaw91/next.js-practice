export  const keyGen = () => {
	const rand = (Date.now() * Math.floor(Math.random() * 100))
    return rand;
}