import { categoryType } from "@/Constants/CategoriesItems";
import Loading from "@/UI/Loading";
import TextField from "@/UI/TextField";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const CategoryForm = ({
  handler,
  isPending,
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
          label=" لینک"
          name="englishTitle"
          required
          register={register}
          validationSchema={{
            required: "لطفا لینک را وارد نمایید",
            minLength: {
              value: 2,
              message: "حداقل ۲ کاراکتر وارد نمایید  ",
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
        <Controller
        control={control}
        name="type"
        rules={{
          required: "لطفا نوع دسته بندی را انتخاب نمایید",
        }}
        render={({ field }) => {
          return (
            <Select
              {...field}
              ref={(ref) => {
                if (ref && !ref.focus) ref.focus = () => {};
              }}
              color="default"
              label="نوع"
              placeholder={getCategory ? getCategory : "انتخاب نوع"}
              defaultSelectedKeys={["0"]}
            >
              <SelectItem isReadOnly key="0" className="text-gray-400/50">
               انتخاب نوع
              </SelectItem>
              {categoryType?.map(({ id, label }) => {
                return (
                  <SelectItem
                    key={id}
                    value={id}
                    className="py-3"
                  >
                    {label}
                  </SelectItem>
                );
              })}
            </Select>
          );
        }}
      />
       {errors.type && (
        <span className="block text-right text-rose-500 my-3 text-base">
          لطفا نوع دسته بندی را انتخاب نمایید
        </span>
      )}
      <Controller
        control={control}
        name="parentId"
        render={({ field }) => {
          return (
            <Select
              {...field}
              ref={(ref) => {
                if (ref && !ref.focus) ref.focus = () => {};
              }}
              color="default"
              label="دسته بندی اصلی"
              placeholder={getCategory ? getCategory : " انتخاب دسته بندی اصلی"}
            >
              <SelectItem isReadOnly key="0" className="text-gray-400/50">
               انتخاب دسته بندی اصلی
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

export default CategoryForm;
