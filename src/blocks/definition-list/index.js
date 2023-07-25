import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import metadata from './block.json';

const ALLOWED_BLOCKS = [
	'simple-definition-list-blocks/term',
	'simple-definition-list-blocks/details',
	'simple-definition-list-blocks/details-html',
	'simple-definition-list-blocks/div',
];

registerBlockType( metadata, {
	...metadata,
	edit: () => {
		const blockProps = useBlockProps();
		const innerBlocksProps = useInnerBlocksProps( blockProps, {
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: InnerBlocks.ButtonBlockAppender,
		} );

		return (
			<dl { ...innerBlocksProps } />
		);
	},
	save: () => {
		const saveBlockProps = useBlockProps.save();
		const saveInnerBlocksProps = useInnerBlocksProps.save( saveBlockProps );

		return (
			<dl { ...saveInnerBlocksProps } />
		);
	},
} );
