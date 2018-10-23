import React from 'react'
import Overlay from '../../Overlay/Overlay'
import Background from './background.svg'

function Home() {
	return (
		<main>
			<div>
				<h1>Hello, my name is Inigo Montoya</h1>
				<p>You killed my father, prepare to die</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut justo sit amet ex faucibus venenatis. Cras efficitur felis neque, quis imperdiet quam tempus eget. Nulla tincidunt felis quis quam consectetur, sed posuere massa tristique. Integer fermentum mi nec purus volutpat egestas. Sed placerat gravida nunc at semper. Integer sed tincidunt erat. Cras suscipit, orci et accumsan aliquam, mi neque suscipit arcu, sed bibendum augue neque a velit. Praesent nec tincidunt nibh, at rhoncus erat. Etiam finibus, mauris id suscipit ullamcorper, felis mauris aliquam quam, id gravida mi quam vel sapien. Pellentesque a arcu porta, tempus sem consectetur, pretium ex. Donec id ornare sapien. In semper enim ornare, sagittis enim sed, tempus velit. Sed eget semper purus. Donec odio lorem, sagittis non dictum sit amet, congue vel nisl. Nunc at hendrerit velit, et scelerisque purus.</p>
				<p>Curabitur justo diam, fringilla sit amet felis eget, imperdiet rutrum elit. Sed quis vestibulum velit. In mauris lacus, varius id finibus eget, feugiat ac purus. Cras ornare, neque vel mollis blandit, leo leo dapibus dolor, ut egestas mauris felis eu diam. Aliquam lobortis est ipsum, pulvinar feugiat magna maximus vel. Nunc in urna commodo, laoreet ligula consequat, congue lacus. Etiam feugiat ante at sapien imperdiet, sed blandit neque porttitor. Ut ut nibh non diam consectetur hendrerit. Cras a ornare sem, eget scelerisque nisi. Integer vestibulum orci non sapien hendrerit, non pulvinar purus eleifend. Ut egestas tempor suscipit. </p>
				<p>Donec mattis est a justo sollicitudin cursus. Quisque nec felis non erat vulputate suscipit id sed sapien. Nunc vel euismod turpis. Cras mattis eros nibh. Nam quam nisi, egestas sed mi quis, dignissim gravida mi. Integer metus risus, maximus eu dolor eu, tincidunt ultrices nulla. Vestibulum in neque tortor. In ultricies erat quis sem cursus, eget suscipit ipsum tempor. Ut diam augue, tempus vel bibendum quis, auctor sit amet felis. Ut elementum, mauris in auctor posuere, tortor purus vulputate nibh, id lacinia enim mauris hendrerit tellus. Nullam ac ligula eget lacus cursus facilisis. Pellentesque porttitor gravida elit et blandit. Etiam et ipsum ac ipsum pellentesque faucibus quis id tellus. Maecenas sollicitudin ante eu finibus blandit. Phasellus suscipit quis est quis pellentesque. </p>
			</div>
			<Overlay path={Background} size="full" />
		</main>
	)
}

export default Home