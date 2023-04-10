import { AutoComplete } from '../components/AutoComplete'
import { StockList } from '../components/StockList'
import trading from '/Trading.png'

export const StockOverviewPage = () => {
  return (
    <>
      <div className="text-center mt-5">
        <img src={trading} />
      </div>
      <AutoComplete />
      <StockList />
    </>
  )
}
