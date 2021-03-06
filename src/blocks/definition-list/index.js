import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
const { name } = metadata;

const ALLOWED_BLOCKS = [
	'simple-definition-list-blocks/term',
	'simple-definition-list-blocks/details',
	'simple-definition-list-blocks/details-html',
	'simple-definition-list-blocks/div',
];

registerBlockType( name, {
	...metadata,
	edit( { className } ) {
		return (
			<dl className={ className }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</dl>
		);
	},

	save( { className } ) {
		return (
			<dl className={ className }>
				<InnerBlocks.Content />
			</dl>
		);
	},
} );
