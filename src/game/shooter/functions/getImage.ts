import img_0 from "../assets/img_0.png"
import img_1 from "../assets/img_1.png"
import img_2 from "../assets/img_2.png"
import img_3 from "../assets/img_3.png"
import img_4 from "../assets/img_4.png"
import img_5 from "../assets/img_5.jpg"
import img_6 from "../assets/img_6.jpg"
import img_7 from "../assets/img_7.jpg"
import img_8 from "../assets/img_8.jpg"

export const getImage = (count: number) => {
  switch (count) {
    case 0:
      return img_0
    case 1:
      return img_1
    case 2:
      return img_2
    case 3:
      return img_3
    case 4:
      return img_4
    case 5:
      return img_5
    case 6:
      return img_6
    case 7:
      return img_7
    case 8:
      return img_8
  }
}

//     case 0:
//       setBoxImg(img_0)
//       break
//     case 1:
//       setBoxImg(img_1)
//       break
//     case 2:
//       setBoxImg(img_2)
//       break
//     case 3:
//       setBoxImg(img_3)
//       break
//     case 4:
//       setBoxImg(img_4)
//       break
//     case 5:
//       setBoxImg(img_6)
//       break
//     case 6:
//       setBoxImg(img_6)
//       break
//     case 7:
//       setBoxImg(img_7)
//       break
//     case 8:
//       setBoxImg(img_8)
//       break
//     default:
//       setBoxImg(img_0)
//       break
//
