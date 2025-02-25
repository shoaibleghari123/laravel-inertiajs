<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'body' => 'required',
            'tags' => 'required|array|min:1',
            'tags.*.name' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'The title is required',
            'body.required' => 'The description is required',
            'tags.*.name.required' => 'The tag name is required'
        ];
    }
}
