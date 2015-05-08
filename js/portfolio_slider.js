$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Friends',
			'thumbnail': ['img/portfolio/small/cat_dog_small.jpg', 'img/portfolio/small/cat_fish_small.jpg'],
			'large': ['img/portfolio/large/cat_dog_large.jpg', 'img/portfolio/large/cat_fish_large.jpg', ],
			'button_list'   :
		     [
			 ],
			'tags'  : ['Все']
			},

            {
                'title': 'Friends',
                'thumbnail': ['img/portfolio/small/dog_bird_small.jpg', 'img/portfolio/small/dog_5_small.jpg'],
                'large': ['img/portfolio/large/dog_bird_large.jpg', 'img/portfolio/large/dog_5_large.jpg', ],
                'button_list':
                [
                ],
                'tags': ['Все']
            },

			{
			'title' : 'Swiss chard pumpkin',
			'thumbnail' : ['img/portfolio/small/dog_1_small.jpg', 'img/portfolio/small/dog_2_small.jpg'],
			'large' : ['img/portfolio/large/dog_1_large.jpg', 'img/portfolio/large/dog_2_large.jpg'],
			'button_list'   :
			[
			],
			'tags'  : ['Собаки','Все']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/cat_1_small.jpg','img/portfolio/small/cat_2_small.jpg'],
			'large' : ['img/portfolio/large/cat_1_large.jpg','img/portfolio/large/cat_2_large.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Кошки', 'Все']
			},

			{
			'title' : 'Aubergine napa cabbage',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/fish_1_small.jpg', 'img/portfolio/small/fish_2_small.jpg'],
			'large': ['img/portfolio/large/fish_1_large.jpg', 'img/portfolio/large/fish_2_large.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Рыбки','Все']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail': ['img/portfolio/small/bird_1_small.jpg', 'img/portfolio/small/bird_2_small.jpg'],
			'large': ['img/portfolio/large/bird_1_large.jpg', 'img/portfolio/large/bird_2_large.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Птицы','Все']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/dog_3_small.jpg','img/portfolio/small/dog_4_small.jpg'],
			'large' : ['img/portfolio/large/dog_3_large.jpg','img/portfolio/large/dog_4_large.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags': ['Собаки', 'Все']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/cat_3_small.jpg','img/portfolio/small/cat_4_small.jpg'],
			'large' : ['img/portfolio/large/cat_3_large.jpg','img/portfolio/large/cat_4_large.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags': ['Кошки', 'Все']
			},

			{
			'title' : 'Azuki bean',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/fish_3_small.jpg', 'img/portfolio/small/fish_4_small.jpg'],
			'large' : ['img/portfolio/large/fish_3_large.jpg', 'img/portfolio/large/fish_4_large.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags': ['Рыбки', 'Все']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/bird_3_small.jpg', 'img/portfolio/small/bird_4_small.jpg'],
			'large' : ['img/portfolio/large/bird_3_large.jpg', 'img/portfolio/large/bird_4_large.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags': ['Птицы', 'Все']
			},
		]
	});
});