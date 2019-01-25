/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-url-editor.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../paper-input/paper-input-container.d.ts" />
/// <reference path="../paper-input/paper-input-behavior.d.ts" />
/// <reference path="../paper-input/paper-input-error.d.ts" />
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts" />
/// <reference path="../iron-input/iron-input.d.ts" />
/// <reference path="../events-target-behavior/events-target-behavior.d.ts" />

declare namespace ApiElements {

  /**
   * `api-url-editor`
   * An AMF powered url editor for the HTTP request editor.
   *
   * The element is regular input element that is adjusted to work with URL
   * data.
   * It supports validation for URL values that may contain variables.
   */
  class ApiUrlEditor extends
    Polymer.PaperInputBehavior(
    Polymer.IronValidatableBehavior(
    ArcBehaviors.EventsTargetBehavior(
    _base))) {

    /**
     * The label for this input.
     */
    label: string|null|undefined;

    /**
     * A value generated by this editor - the URL.
     */
    value: string|null|undefined;

    /**
     * An error message to display
     */
    errorMessage: string|null|undefined;

    /**
     * Value or RAML's base URI property.
     *
     * Note, the element doesn't check if `baseUri` is relative or not.
     * Hosting application have to take care of that.
     */
    baseUri: string|null|undefined;

    /**
     * Currently selected endpoint relative URI.
     * It is available in RAML definition.
     */
    endpointPath: string|null|undefined;

    /**
     * Computed value, sum of `baseUri` and `endpointPath`
     */
    readonly _fullUri: any;

    /**
     * Computed query properties model.
     * Use `api-url-data-model` to compute model for the view.
     */
    queryModel: any[]|null|undefined;

    /**
     * Computed URI properties model.
     * Use `api-url-data-model` to compute model for the view.
     */
    pathModel: any[]|null|undefined;

    /**
     * Computed, ordered list of URL variables in the URI string.
     */
    readonly urlParams: any[]|null|undefined;

    /**
     * Computed regexp for the current `_fullUri` value to search for the
     * URI parameters.
     */
    readonly urlSearchRegexp: RegExp|null|undefined;
    _attachListeners(node: any): void;
    _detachListeners(node: any): void;
    ready(): void;

    /**
     * Computes endpoint's full URI with (possibly) variables in it.
     *
     * @param baseUri API base URI
     * @param endpointPath Endpoint relative URI to `baseUri`
     * @returns A full URI for the endpoint.
     */
    _computeFullUrl(baseUri: String|null, endpointPath: String|null): String|null;
    _computeValueChanged(_fullUri: any, queryRecord: any, uriRecord: any): void;

    /**
     * Computes url value from current `baseUri` and query/uri models.
     *
     * @param queryModel Query parameters model
     * @param pathModel Uri parameters model.
     * @param uri Current endpoint uri.
     */
    _computeValue(queryModel: any[]|null, pathModel: any[]|null, uri: String|null): void;

    /**
     * Creates a map of serialized values from a model.
     * It is a replacemenet for `iron-form` serialize function which
     * can't be used here because this function is called before local DOM
     * is ready and therefore form is not set.
     *
     * @param model Model to compute.
     * @returns Map of serialized values.
     */
    _formValuesFromModel(model: any[]|null): Map|null;

    /**
     * Extracts value from the model item.
     * If the item is required it is alwats returned (even  if it is empty string).
     * If value is not required and not present then it returns `undefined`.
     *
     * @param item Model item
     * @returns Model value
     */
    _valueFormModelItem(item: object|null): String|null;

    /**
     * Applies URI parameters to the URL.
     *
     * @param url An URL to apply the params to
     * @param model Uri parameters model.
     * @returns The URL.
     */
    _applyUriParams(url: String|null, model: any[]|null): String|null;

    /**
     * Creates a RegExp object to replace template variable from the base string
     *
     * @param name Name of the parameter to be replaced
     */
    _createUrlReplaceRegex(name: String|null): RegExp|null;

    /**
     * Applies query parameters to the URL.
     * Query parameters that are not required by the API spec and don't have value
     * are removed from the URL. Parameters that are required and don't have
     * value are set to the URL but with empty value.
     *
     * @param url An URL to apply the params to
     * @param model Query parameters model.
     * @returns The URL.
     */
    _applyQueryParams(url: String|null, model: any[]|null): String|null;

    /**
     * Computes query parameters list of items containing `name` and `value`
     * properties to use to build query string.
     *
     * This function may change the `params` map.
     *
     * @param params Map of query model properties.
     * @returns List of query parameters.
     */
    _computeQueryItems(params: object|null): any[]|null;

    /**
     * @param object The list of objects to encode as
     * x-www-form-urlencoded string. Each entry should have `name` and `value`
     * properties.
     * @returns .
     */
    _wwwFormUrlEncode(object: any[]|null): string;

    /**
     * @param str A key or value to encode as x-www-form-urlencoded.
     * @returns .
     */
    _wwwFormUrlEncodePiece(str: any): string;

    /**
     * Applies query parameter values to an object.
     * Repeated parameters will have array value intead of string value.
     *
     * @param param Query parameter value as string. Eg `name=value`
     * @param obj Target for values
     */
    _applyQueryParamToObject(param: String|null, obj: object|null): void;

    /**
     * Applies values from the `values` array to the uri parametes which names are in the `names`
     * array.
     * Both lists are ordered list of paramerters.
     *
     * @param values Values for the parameters
     * @param names List of variables names (uri parameters).
     */
    _applyUriValues(values: Array<String|null>|null, names: Array<String|null>|null): void;

    /**
     * Applies query parameters values to the render list.
     *
     * @param map A map where keys are names of the parameters in the
     * `queryModel` list
     */
    _applyQueryParamsValues(map: object|null): void;
    _findModelIndex(name: any, type: any): any;

    /**
     * A handler that is called on input
     */
    _onValueChanged(): void;
    _onElementBlur(): void;

    /**
     * A handler for the `url-value-changed` event.
     * If this element is not the source of the event then it will update the `value` property.
     * It's to be used besides the Polymer's data binding system.
     */
    _extValueChangedHandler(e: CustomEvent|null): void;
    _getValidity(): any;

    /**
     * Creates a regular expression from the `_fullUri` to match the
     * parameters in the `value` url.
     *
     * @param url Enpoint's absolute URL with (possibly) parameters.
     * @returns A RegExp that can be used to search for parameters values.
     */
    _computeUrlRegexp(url: String|null): String|null;

    /**
     * Computes ordered list of parameters applied to the `_fullUri`.
     * For example the URL: `http://{environment}.domain.com/{apiVersion}/`
     *
     * will be mapped to
     * ```
     * [
     *   "environment",
     *   "apiVersion"
     * ]
     * ```
     *
     * @param url The URL to test for the parameters.
     * @returns An ordered list of parameters or null if none found.
     */
    _computeUrlParams(url: String|null): any[]|null;
    fire(type: any, detail: any, options: any): any;
  }
}

interface HTMLElementTagNameMap {
  "api-url-editor": ApiElements.ApiUrlEditor;
}
