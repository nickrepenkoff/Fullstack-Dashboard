export const options = (isDark: boolean): any => ({
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
			},
			ticks: {
				font: {
					size: 20,
				},
				color: isDark ? '#fff' : '#222',
			},
			border: {
				display: false,
			},
		},
		y: {
			grid: {
				display: false,
			},
			ticks: {
				display: false,
			},
			border: {
				display: false,
			},
		},
	},
	borderRadius: 15,
	borderSkipped: false,
	barThickness: 60,
	plugins: {
		tooltip: {
			backgroundColor: isDark ? '#222' : '#fff',
			bodyColor: isDark ? '#fff' : '#222',
			titleColor: isDark ? '#fff' : '#222',
			titleFont: {
				size: 18,
				weight: 500,
			},
			bodyFont: {
				size: 16,
			},
			displayColors: false,
			titleAlign: 'center',
			padding: 10,
			yAlign: 'bottom',
			callbacks: {
				label: function (context: any) {
					if (context.parsed.y !== null) {
						return context.parsed.y.toLocaleString()
					}
				},
			},
		},
	},
})
