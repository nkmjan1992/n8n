import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { EditorView } from '@codemirror/view';
import { tags } from '@lezer/highlight';

/**
 * Based on Tomorrow theme by Chris Kempson
 * https://github.com/vadimdemedes/thememirror/blob/main/source/themes/tomorrow.ts
 */

const BASE_STYLING = {
	fontSize: '0.8em',
	background: '#FFFFFF',
	foreground: '#4D4D4C',
	caret: '#AEAFAD',
	selection: '#D6D6D6',
	gutterBackground: '#FFFFFF',
	gutterForeground: '#4D4D4C80',
	lineHighlight: '#EFEFEF',
};

const HIGHLIGHT_STYLING = [
	{
		tag: tags.comment,
		color: '#8E908C',
	},
	{
		tag: [tags.variableName, tags.self, tags.propertyName, tags.attributeName, tags.regexp],
		color: '#C82829',
	},
	{
		tag: [tags.number, tags.bool, tags.null],
		color: '#F5871F',
	},
	{
		tag: [tags.className, tags.typeName, tags.definition(tags.typeName)],
		color: '#C99E00',
	},
	{
		tag: [tags.string, tags.special(tags.brace)],
		color: '#718C00',
	},
	{
		tag: tags.operator,
		color: '#3E999F',
	},
	{
		tag: [tags.definition(tags.propertyName), tags.function(tags.variableName)],
		color: '#4271AE',
	},
	{
		tag: tags.keyword,
		color: '#8959A8',
	},
	{
		tag: tags.derefOperator,
		color: '#4D4D4C',
	},
];

export const CODE_NODE_EDITOR_THEME = [
	EditorView.theme({
		'&': {
			backgroundColor: BASE_STYLING.background,
			color: BASE_STYLING.foreground,
			'font-size': BASE_STYLING.fontSize,
		},
		'.cm-content': {
			caretColor: BASE_STYLING.caret,
		},
		'.cm-cursor, .cm-dropCursor': {
			borderLeftColor: BASE_STYLING.caret,
		},
		'&.cm-focused .cm-selectionBackgroundm .cm-selectionBackground, .cm-content ::selection': {
			backgroundColor: BASE_STYLING.selection,
		},
		'.cm-activeLine': {
			backgroundColor: BASE_STYLING.lineHighlight,
		},
		'.cm-gutters': {
			backgroundColor: BASE_STYLING.gutterBackground,
			color: BASE_STYLING.gutterForeground,
		},
		'.cm-activeLineGutter': {
			backgroundColor: BASE_STYLING.lineHighlight,
		},
	}),
	syntaxHighlighting(HighlightStyle.define(HIGHLIGHT_STYLING)),
];