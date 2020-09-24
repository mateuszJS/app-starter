type DogsResponse = {
  message: { [key: string]: string[] }
}

export const getDogsList = async () => {
  try {
    const res: DogsResponse = await fetch('https://dog.ceo/api/breeds/list/all').then((res) =>
      res.json(),
    )

    return Object.keys(res.message).slice(0, 10)
  } catch (err) {
    console.log(err)
    return []
  }
}
