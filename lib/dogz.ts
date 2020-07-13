type DogzResponse = {
  message: { [key: string]: string[] }
}

export const getDogzList = async () => {
  try {
    const res: DogzResponse = await fetch('https://dog.ceo/api/breeds/list/all').then((res) =>
      res.json(),
    )

    return Object.keys(res.message).slice(0, 10)
  } catch (err) {
    console.log(err)
    return []
  }
}
