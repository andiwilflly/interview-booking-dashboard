import React from 'react';


const lazy = (loadLazyComponent)=> {
	return (Component)=> {
		return class Lazy extends Component {

			state = {
				LazyComponent: null
			};


			componentDidMount() {
				this.loadComponentLazy();
			}


			loadComponentLazy() {
				loadLazyComponent().then(LazyComponent=> {
					this.setState((prevState, props)=> ({ LazyComponent: LazyComponent.default }))
				})
			};

			render() {
				const { LazyComponent } = this.state;

				return (
					<React.Fragment>
						{ LazyComponent ? <LazyComponent { ...this.props } /> : null }
					</React.Fragment>
				)
			}
		};
	};
};



export default lazy;
