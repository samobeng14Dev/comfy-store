import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProjects = () => {
	return (
		<div className='pt-24'>
			<SectionTitle text='featured products' />
			<ProductsGrid />
		</div>
	);
};

export default FeaturedProjects;
