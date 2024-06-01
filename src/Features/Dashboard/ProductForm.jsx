import Loading from "@/UI/Loading";
import TextField from "@/UI/TextField";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const ProductForm = ({
  handler,
  isPending,
  tags,
  setTags,
  categories,
  register,
  errors,
  handleSubmit,
  control,
  getCategory
}) => {
  return (
    <form
      onSubmit={handleSubmit(handler)}
      className="w-full md:max-w-screen-md space-y-5"
    >
      <TextField
        label=" عنوان"
        name="title"
        required
        register={register}
        validationSchema={{
          required: "لطفا عنوان را وارد نمایید",
          minLength: {
            value: 5,
            message: "حداقل ۵ کاراکتر وارد نمایید  ",
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
        label=" توضیحات"
        name="description"
        required
        register={register}
        validationSchema={{
          required: "لطفا توضیحات را وارد نمایید",
          minLength: {
            value: 5,
            message: "حداقل ۵ کاراکتر وارد نمایید  ",
          },
          maxLength: {
            value: 50,
            message: "حداکثر ۵۰ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        placeholder=" لطفا توضیحات را وارد نمایید"
      />
      <TextField
        label=" لینک"
        name="slug"
        required
        register={register}
        validationSchema={{
          required: "لطفا لینک را وارد نمایید",
          minLength: {
            value: 5,
            message: "حداقل ۵ کاراکتر وارد نمایید  ",
          },
          maxLength: {
            value: 15,
            message: "حداکثر ۱۰ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا لینک را وارد نمایید"
      />
      <Controller
        control={control}
        name="category"
        rules={{
          required: "لطفا یک دسته بندی را انتخاب نمایید",
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
              placeholder={getCategory ? getCategory : "یکی از موارد را انتخاب نمایید"}
            >
              <SelectItem isReadOnly key="0" className="text-gray-400/50">
                یکی از موارد را انتخاب نمایید
              </SelectItem>
              {categories?.map(({ _id, title }) => {
                return (
                  <SelectItem
                    key={_id}
                    value={_id}
                    className="py-3"
                  >
                    {title}
                  </SelectItem>
                );
              })}
            </Select>
          );
        }}
      />
      {errors.category && (
        <span className="block text-right text-rose-500 my-3 text-base">
          لطفا یک دسته بندی را انتخاب نمایید
        </span>
      )}
      <TextField
        label=" نام برند"
        name="brand"
        required
        register={register}
        validationSchema={{
          required: "لطفا نام برند را وارد نمایید",
          minLength: {
            value: 5,
            message: "حداقل ۵ کاراکتر وارد نمایید  ",
          },
          maxLength: {
            value: 15,
            message: "حداکثر ۱۰ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        placeholder=" لطفا نام برند را وارد نمایید"
      />
      <div>
        <label>تگ محصول</label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="لطفا تگ محصول را وارد نمایید"
          classNames={{ input: "!w-full textField-input" }}
        />
        <em className="block mt-2 text-gray-400">
          برای افزودن تگ جدید از کاما استفاده نمایید
        </em>
      </div>
      <TextField
        type="number"
        label=" قیمت (تومان) "
        name="price"
        required
        register={register}
        validationSchema={{
          required: "لطفا قیمت را وارد نمایید",
          min: {
            value: 1,
            message: "حداقل ۱ تومان وارد نمایید  ",
          },
          max: {
            value: 10000000,
            message: "حداکثر ۱۰۰۰۰۰۰۰ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا قیمت را وارد نمایید"
      />
      <TextField
        type="number"
        label=" درصد تخفیف"
        name="discount"
        required
        register={register}
        validationSchema={{
          required: "لطفا درصد تخفیف را وارد نمایید",

          min: {
            value: 0,
            message: "اگر محصول تخفیف ندارد لطفا ۰ وارد نمایید",
          },
          max: {
            value: 100,
            message: "حداکثر ۱۰۰ درصد وارد نمایید",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا درصد تخفیف را وارد نمایید"
      />
      <TextField
        type="number"
        label=" قیمت با تخفیف (تومان) "
        name="offPrice"
        required
        register={register}
        validationSchema={{
          required: "لطفا قیمت با تخفیف را وارد نمایید",
          min: {
            value: 1,
            message: "حداقل ۱ تومان وارد نمایید  ",
          },
          maxLength: {
            value: 10000000,
            message: "حداکثر ۱۰۰۰۰۰۰۰ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا قیمت با تخفیف را وارد نمایید"
      />
      <TextField
        type="number"
        label=" موجودی"
        name="countInStock"
        required
        register={register}
        validationSchema={{
          required: "لطفا موجودی را وارد نمایید",
          min: {
            value: 1,
            message: "حداقل عدد ۱ وارد نمایید  ",
          },
          maxLength: {
            value: 50,
            message: "حداکثر ۵۰ عدد وارد نمایید",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا موجودی را وارد نمایید"
      />
      <TextField
        label=" لینک تصویر"
        name="imageLink"
        required
        register={register}
        validationSchema={{
          required: "لطفا لینک تصویر را وارد نمایید",
          minLength: {
            value: 5,
            message: "حداقل ۵ کاراکتر وارد نمایید  ",
          },
          maxLength: {
            value: 25,
            message: "حداکثر ۲۵ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا  لینک تصویر را وارد نمایید"
      />
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

export default ProductForm;
