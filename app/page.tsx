import ThemeResolver from "@/components/module/ThemeResolver"

export default async function Home() {
  return (
    <div>
      <ThemeResolver componentType="template" component="ProductList" />
    </div>
  )
}
