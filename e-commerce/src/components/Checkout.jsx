import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"; 
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const PaymentPage = () => {
    const [confirmed, setConfirmed] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const processingTimer = setTimeout(() => {
            setConfirmed(true)
            dispatch(clearCart());

        }, 2000);

        return () => clearTimeout(processingTimer);
    }, [dispatch]);

    useEffect(() => {
        if(confirmed) {
            const redirectTimer = setTimeout(() => {
                navigate("/");
            }, 2000)
            
            return () => clearTimeout(redirectTimer)
        }
    }, [confirmed, navigate])

    
    return (
        <section className="flex flex-col items-center justify-center h-[70vh] text-center">
            {!confirmed ? (
                <>
                    <h1 className="text-2xl font-bold mb-4 text-[var(--text-color)]">
                        Processing Payment....
                    </h1>
                    <p className="text-[var(--subtext-color)]">
                        Please wait while we complete your payment.
                    </p>
                </>
            ) : (
                <>
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4 "/>
                    <h1 className="text-2xl font-bold text-[var(--text-color)]">
                        Order Confirmed!
                    </h1>
                    <p className="text-[var(--subtext-color)]">
                        You'll be redirected ot the homepage shortly.
                    </p>
                </>
            )}
        </section>
    )

}

export default PaymentPage;