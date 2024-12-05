import React from 'react'
import img from '@/assets/img/gallery.png'
import img2 from '@/assets/img/gallery2.png'
import img3 from '@/assets/img/gallery3.png'
import img4 from '@/assets/img/gallery4.png'
import img5 from '@/assets/img/gallery5.png'
export const useGalleryData = () => {

  const data = [
    {
			id:1,
			title: 'Выставка «ИНТЕРТКАНЬ-2024.Осень»',
			image1: [
				{
					img: img
				},
				{
					img: img2
				},
				{
					img: img3
				}
			],
			image2: [
				{
					img: img3
				},
				{
					img: img2
				},
				{
					img: img4
				},
				{
					img: img5
				}
			]
		},
		{
			id:2,
			title: 'Итоговое общее собрание членов СОЮЗЛЕГПРОМА-2024',
			image1: [
				{
					img: img5
				},
				{
					img: img
				},
				{
					img: img2
				}
			],
			image2: [
				{
					img: img5
				},
				{
					img: img
				},
				{
					img: img2
				},
				{
					img: img4
				}
			]
		}
  ]
	return  {data}
}
