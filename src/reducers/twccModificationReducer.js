import {
	SET_EDIT_MODAL_FLAG,
	GET_TWCC_MODIFICATION_TABLE_DATA,
	TRANSFORM_TABLE_DATA,
	SET_CURRENT_STRUCTURE,
	SET_IS_SITE,
	SET_IS_VENDOR,
	SET_VENDOR_CODE,
	TWCC_GET_VENDOR_CODE,
	UPDATE_COMPONENT_HISTORY,
} from "../actions/types";

const initialState = {
	isLoading: false,
	isError: false,
	isSucess: false,
	message: "",
	twccModificationData: [],
	vendorCodeList: [],
	currentStructure: {},
	showEditModal: false,
	isSite: false,
	isVendor: false,
	subContId: 0,
};

let reducerFn = (state = initialState, action) => {
	switch (action.type) {
		case SET_EDIT_MODAL_FLAG:
			return { ...state, showEditModal: action.payload };
		case `${GET_TWCC_MODIFICATION_TABLE_DATA}_PENDING`:
			return { ...state, isLoading: true };
		case `${GET_TWCC_MODIFICATION_TABLE_DATA}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSucess: false,
				message: action.payload.response.data.message,
			};
		case `${GET_TWCC_MODIFICATION_TABLE_DATA}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSucess: true,
				twccModificationData: action.payload.data,
			};
		case `${TWCC_GET_VENDOR_CODE}_PENDING`:
			return { ...state, isLoading: true };
		case `${TWCC_GET_VENDOR_CODE}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSucess: false,
				message: action.payload.response.data.message,
			};
		case `${TWCC_GET_VENDOR_CODE}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSucess: true,
				vendorCodeList: action.payload.data,
			};
		case `${UPDATE_COMPONENT_HISTORY}_PENDING`:
			return { ...state, isLoading: true };
		case `${UPDATE_COMPONENT_HISTORY}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSucess: false,
				message: action.payload.response.data.message,
			};
		case `${UPDATE_COMPONENT_HISTORY}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSucess: true,
				message: action.payload.data.message,
			};
		case TRANSFORM_TABLE_DATA:
			return { ...state, twccModificationData: action.payload };
		case SET_CURRENT_STRUCTURE:
			return { ...state, currentStructure: action.payload };
		case SET_IS_VENDOR:
			return { ...state, isVendor: action.payload };
		case SET_IS_SITE:
			return { ...state, isSite: action.payload };
		case SET_VENDOR_CODE:
			return { ...state, subContId: action.payload };
		default:
			return state;
	}
};

export default reducerFn;