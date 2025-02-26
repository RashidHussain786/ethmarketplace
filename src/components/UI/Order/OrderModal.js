"use client";

import React, { useEffect, useState } from 'react';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import useEthPrice from '@/components/Hooks/useEthPrice';

const defaultOrder = {
    price: 0,
    email: "",
    confirmationEmail: ""
};

const _createFormState = (isDisabled = false, message =  "") => ({isDisabled, message})

const createFormState = ({price, email, confirmationEmail}, hasAgreedTOS) => {
  if (!price || Number(price) <= 0) {
    return _createFormState(true, "Price is not valid.")
  }
  else if (confirmationEmail.length === 0 || email.length === 0) {
    return _createFormState(true)
  }
  else if (email !== confirmationEmail) {
    return _createFormState(true, "Email are not matching.")
  }
  else if (!hasAgreedTOS) {
    return _createFormState(true, "You need to agree with terms of service in order to submit the form")
  }

  return _createFormState()
}

const OrderModal = ({ course, onClose,onSubmit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [order, setOrder] = useState(defaultOrder);
    const [enablePrice, setEnablePrice] = useState(false);
    const [hasAgreedTOS, setHasAgreedTOS] = useState(false);
    const { eth } = useEthPrice();

    useEffect(() => {
        if (course) {
            setIsOpen(true);
            setOrder({ ...defaultOrder, price: eth.perItem }); 
        }
    }, [course, eth.data]);

    const closeModal = () => {
        setIsOpen(false);
        setOrder(defaultOrder);
        setEnablePrice(false)
        setHasAgreedTOS(false)
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    };
    const handleCheckBox = (e) => {
        const { checked } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            price: checked ? prevOrder.price : eth.data.toString()
        }));
        setEnablePrice(checked);
    };
    const formState = createFormState(order, hasAgreedTOS)

    return (
        <Modal isOpen={isOpen}>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="mb-7 text-lg font-bold leading-6 text-gray-900" id="modal-title">
                                {course?.title}
                            </h3>
                            <div className="mt-1 relative rounded-md">
                                <div className="mb-1">
                                    <label className="mb-2 text-gray-900 font-bold">Price (ETH)</label>
                                    <div className="text-xs text-gray-700 flex">
                                        <label className="flex items-center mr-2">
                                            <input
                                                checked={enablePrice}
                                                type="checkbox"
                                                className="form-checkbox"
                                                onChange={handleCheckBox}
                                            />
                                        </label>
                                        <span>Adjust Price - only when the price is not correct</span>
                                    </div>
                                </div>
                                <input
                                    disabled={!enablePrice}
                                    value={order.price}
                                    onChange={handleInputChange}
                                    type="Number"
                                    name="price"
                                    id="price"
                                    className="disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md text-black"
                                />
                                <p className="text-xs text-gray-700">
                                    Price will be verified at the time of the order. If the price is lower, the order can be declined (+- 2% slippage is allowed).
                                </p>
                            </div>
                            <div className="mt-2 relative rounded-md">
                                <div className="mb-1">
                                    <label className="mb-2 text-gray-900 font-bold">Email</label>
                                </div>
                                <input
                                    value={order.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md text-black"
                                    placeholder="x@y.com"
                                />
                                <p className="text-xs text-gray-700 mt-1">
                                    It's important to fill in a correct email; otherwise, the order cannot be verified. We are not storing your email anywhere.
                                </p>
                            </div>
                            <div className="my-2 relative rounded-md">
                                <div className="mb-1">
                                    <label className="mb-2 text-gray-900 font-bold">Repeat Email</label>
                                </div>
                                <input
                                    value={order.confirmationEmail}
                                    onChange={handleInputChange}
                                    type="email"
                                    name="confirmationEmail"
                                    id="confirmationEmail"
                                    className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md text-black"
                                    placeholder="x@y.com"
                                />
                            </div>
                            <div className="text-xs text-gray-700 flex">
                                <label className="flex items-center mr-2">
                                    <input
                                        checked={hasAgreedTOS}
                                        onChange={({target: {checked}}) => {
                                          setHasAgreedTOS(checked)
                                        }}
                                        type="checkbox"
                                        className="form-checkbox"
                                    />
                                </label>
                                <span>I accept Eincode's terms of service and agree that my order can be rejected if the data provided above are not correct.</span>
                            </div>
                            { formState.message &&
                                <div className="p-4 my-3 text-red-700 bg-red-200 rounded-lg text-sm">
                                { formState.message }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex">
                    <Button 
                    disabled={formState.isDisabled}
                    onClick={()=>onSubmit(order)}>Submit</Button>
                    <Button
                        className="text-white bg-red-600 hover:bg-red-700"
                        onClick={closeModal}
                        variant="red"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default OrderModal;
