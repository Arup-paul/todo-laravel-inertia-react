<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoresRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'source' => 'required',
            'type' => 'required',
            'shop_id' => 'nullable',
            'code' => 'nullable',
            'message' => 'nullable',
            'extra_info' => 'nullable',

            'seller_id' => 'nullable',
            'order_status' => 'nullable',
            'message_type' => 'nullable',
            'trade_order_id' => 'nullable',
            'trade_order_line_id' => 'nullable',
            'site' => 'nullable',
        ];
    }
}
