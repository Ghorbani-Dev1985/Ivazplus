import Loading from "@/UI/Loading";
import TextField from "@/UI/TextField";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const CouponForm = ({
  handler,
  isPending,
  products,
  register,
  errors,
  handleSubmit,
  control,
  getCategory,
}) => {
  return (
    <form
      onSubmit={handleSubmit(handler)}
      className="w-full md:max-w-screen-md space-y-5"
    >
      <TextField
        label=" نوع"
        name="type"
        required
        register={register}
        validationSchema={{
          required: "لطفا نوع را وارد نمایید",
          minLength: {
            value: 3,
            message: "حداقل ۳ کاراکتر وارد نمایید  ",
          },
          maxLength: {
            value: 25,
            message: "حداکثر ۲۵ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        placeholder=" لطفا توضیحات را وارد نمایید"
      />
      <TextField
        label=" کد تخفیف"
        name="code"
        required
        ltr
        register={register}
        validationSchema={{
          required: "لطفا کدتخفیف را وارد نمایید",
          minLength: {
            value: 3,
            message: "حداقل ۳ کاراکتر وارد نمایید  ",
          },
          maxLength: {
            value: 50,
            message: "حداکثر ۵۰ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        placeholder=" لطفا کدتخفیف را وارد نمایید"
      />
      <TextField
        label=" مبلغ(تومان)"
        type="number"
        name="amount"
        required
        register={register}
        validationSchema={{
          required: "لطفا مبلغ را وارد نمایید",
          min: {
            value: 1,
            message: "حداقل ۱ تومان وارد نمایید  ",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا مبلغ را وارد نمایید"
      />
      <TextField
        label=" تعداد استفاده "
        type="number"
        name="usageLimit"
        required
        register={register}
        validationSchema={{
          required: "لطفا تعداد استفاده را وارد نمایید",
          min: {
            value: 1,
            message: "حداقل ۱ بار را وارد نمایید  ",
          },
        }}
        errors={errors}
        placeholder=" لطفا تعداد استفاده را وارد نمایید"
      />
      <Controller
        control={control}
        name="productIds"
        rules={{
          required: "لطفا یک محصول را انتخاب نمایید",
        }}
        render={({ field }) => {
          return (
            <Select
              {...field}
              ref={(ref) => {
                if (ref && !ref.focus) ref.focus = () => {};
              }}
              color="default"
              label="دسته بندی"
              placeholder={
                getCategory ? getCategory : "یک محصول را انتخاب نمایید"
              }
            >
              <SelectItem isReadOnly key="0" className="text-gray-400/50">
                یک محصول را انتخاب نمایید
              </SelectItem>
              {products?.map(({ _id, title }) => {
                return (
                  <SelectItem key={_id} value={_id} className="py-3">
                    {title}
                  </SelectItem>
                );
              })}
            </Select>
          );
        }}
      />
      {errors.productIds && (
        <span className="block text-right text-rose-500 my-3 text-base">
          لطفا یک محصول را انتخاب نمایید
        </span>
      )}

      {isPending ? (
        <Loading />
      ) : (
        <Button
          type="submit"
          color="primary"
          className="w-full hover:bg-secondary hover:opacity-100 rounded-lg py-6"
        >
          تایید
        </Button>
      )}
    </form>
  );
};

export default CouponForm;
